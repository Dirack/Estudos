from typing import Optional

from pydantic import BaseModel, Field, ValidationError, field_validator


# ==========================================================
# Modelo aninhado
# ==========================================================

class Address(BaseModel):
    city: str
    country: str


# ==========================================================
# Modelo principal
# ==========================================================

class User(BaseModel):
    name: str
    age: int = Field(
        gt=0,
        lt=120,
        description="Idade do usuário"
    )

    salary: float

    hobbies: list[str]

    email: Optional[str] = None

    active: bool = True

    address: Address

    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:

        if len(value.strip()) < 3:
            raise ValueError(
                "Nome deve possuir pelo menos 3 caracteres"
            )

        return value.title()


# ==========================================================
# Exemplo válido
# ==========================================================

print("\n=== EXEMPLO VÁLIDO ===\n")

user = User(
    name="rodolfo",
    age="32",              # str -> int
    salary="10100.50",     # str -> float
    hobbies=[
        "Python",
        "Francês",
        "Muay Thai"
    ],
    address={
        "city": "Rio de Janeiro",
        "country": "Brasil"
    }
)

print(user)

print("\nNome validado:")
print(user.name)

print("\nTipo da idade:")
print(type(user.age))

print("\nTipo do salário:")
print(type(user.salary))

print("\nCidade:")
print(user.address.city)

print("\nCampo opcional:")
print(user.email)

print("\nCampo com valor padrão:")
print(user.active)


# ==========================================================
# Exportando para dict
# ==========================================================

print("\n=== MODEL_DUMP ===\n")

data = user.model_dump()

print(data)


# ==========================================================
# Exportando para JSON
# ==========================================================

print("\n=== MODEL_DUMP_JSON ===\n")

json_data = user.model_dump_json(indent=4)

print(json_data)


# ==========================================================
# Exemplo inválido
# ==========================================================

print("\n=== EXEMPLO INVÁLIDO ===\n")

try:

    invalid_user = User(
        name="AB",
        age=-10,
        salary=5000,
        hobbies=["Python"],
        address={
            "city": "Rio",
            "country": "Brasil"
        }
    )

except ValidationError as e:

    print(e)