import {render, screen} from "@testing-library/react";
import ConfirmButton from "./ConfirmButton";
import userEvent from "@testing-library/user-event";


describe("confirm button", () => {

    test("button renders, does not render conditional button", () => {
        render(<ConfirmButton label={"Submit Book"} onConfirm={() => {}}/>);
        expect(screen.getByRole("button",{name:"Submit Book"})).toBeInTheDocument()
        expect(screen.getByRole("button",{name:"Submit Book"}).textContent).toEqual("Submit Book")
        expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument()
    });

    test("clicking confirm button shows buttons are you sure and cancel", async() => {
        render(<ConfirmButton label={"Submit Book"} onConfirm={() => {}}/>);
        const user = userEvent.setup();
        await user.click(screen.getByRole("button",{name:"Submit Book"}));
        expect(screen.getByRole("button",{name:"Confirm"})).toBeInTheDocument()
        expect(screen.getByRole("button",{name:"Cancel"})).toBeInTheDocument()

    });
});