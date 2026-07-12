from typing import Optional

from pydantic import BaseModel, Field, ValidationError, field_validator

class Address(BaseModel):
    city: str
    country: str


class User(BaseModel):
    name: str
    age: int = Field(
        gt=0,
        lt=120,
        description="Idade"
    )
    address: Address

    @field_validator("name")
    @classmethod
    def validate_name(cls,value:str)->str:

        if len(value.strip()) < 3:
            raise ValueError('erro')
        
        return value.title()


add = Address(city="belem",country="brasil")

print(add.city, add.country)

user = User(
    name="rodolfo",
    age=32,
    address={
        "city":"rio",
        "country":"brasil"
    }
)

print(user)

print(user.model_dump())
print(user.model_dump_json(indent=4))

try:
    invalid_user = User(
        name = "fu",
        age=-10,
        address=add
    )
except ValidationError as e:
    print(e)