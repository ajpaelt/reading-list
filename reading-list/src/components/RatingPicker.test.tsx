import {render, screen} from "@testing-library/react";
import RatingPicker from "./RatingPicker";
import userEvent from "@testing-library/user-event";

describe("progress bar", () => {

    test("renders rating picker with accessible name", () => {
        render(<RatingPicker value = {1} onChange = {() => {}}/>);
        expect(screen.getByRole("group", { name: "Your rating" })).toBeInTheDocument();
    });

    test("renders rating picker with five radio buttons", () => {
        render(<RatingPicker value = {1} onChange = {() => {}}/>);
        expect(screen.getAllByRole("radio").length).toBe(5);
    });

    test("picker with value null has no options checked", () => {
        render(<RatingPicker value = {null} onChange = {() => {}}/>);
        screen.getAllByRole("radio").forEach((radio) => {
            expect(radio).not.toBeChecked();
        });
    });

    test("picker with value 3 has only 3 checked", () => {
        render(<RatingPicker value = {3} onChange = {() => {}}/>);
        screen.getAllByRole("radio").forEach((radio) => {
            if (radio.ariaLabel == "3") {expect(radio).toBeChecked()}
                else {expect(radio).not.toBeChecked()}
        });
    });


    test("picker once 4 is clicked calls onChange once, with 4", async() => {
        const user = userEvent.setup();
        const onChange = vi.fn();
        render(<RatingPicker value = {1} onChange = {onChange}/>);

        await user.click(screen.getByRole("radio", {name: "4"}))

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(4)

    });

});






// Clicking the radio that is already checked either calls onChange or does not. Decide which it should do, and write the decision into the test name.