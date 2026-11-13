// import { describe, expect, test } from "vitest";
import {render, screen} from "@testing-library/react"
import ProgressBar from "./ProgressBar"




describe("progress bar", () => {

    test("renders progress bar with accessible name", () => {
        render(<ProgressBar pagesRead={0} totalPages={0}/>)
        // screen.getByRole("progressbar", { name: "Reading progress" })
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toBeInTheDocument()
    })

    test("renders pages read as a percentage of total pages", () => {
        render(<ProgressBar pagesRead={150} totalPages={300}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("50%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","50")

    })

    test("renders pages read correctly when at 100%", () => {
        render(<ProgressBar pagesRead={300} totalPages={300}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("100%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","100")

    })

    test("renders pages read correctly when at 0%", () => {
        render(<ProgressBar pagesRead={0} totalPages={300}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("0%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","0")

    })

    test("rounds to nearest whole number percentage", () => {
        render(<ProgressBar pagesRead={100} totalPages={300}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("33%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","33")

    })

    test("clamps percentage when given more than 100%", () => {
        render(<ProgressBar pagesRead={400} totalPages={300}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("100%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","100")

    })

    test("shows 100% if given 0 pages and 0 read", () => {
        render(<ProgressBar pagesRead={0} totalPages={0}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("100%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","100")
       
    })

    test("shows 100% if given 0 pages and 10 read", () => {
        render(<ProgressBar pagesRead={10} totalPages={0}/>)
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveTextContent("100%")
        expect(screen.getByRole("progressbar", { name: "Reading progress" })).toHaveAttribute("aria-valuenow","100")
       
    })
    
})