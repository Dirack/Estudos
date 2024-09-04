import { describe } from "node:test";
import Page from "./page";
import {render,screen} from '@testing-library/react'

test("do something",()=>{
    render("<Page />")
    expect(screen.getByText("Boa noite"))
})
