import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FollowingButtonComponent from "../features/following/button/following-button.component";

describe("FollowingButtonComponent", () => {
    it("should render correctly with not favorite icon", () => {
        render(
            <FollowingButtonComponent isFav={false} onToggleFavorite={() => { }} />
        );

        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("is_not_favorite");

        expect(buttonElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "/images/star.png");
    });

    it("should render correctly with favorite icon", () => {
        render(
            <FollowingButtonComponent isFav={true} onToggleFavorite={() => { }} />
        );

        const buttonElement = screen.getByRole("button");
        const imgElement = screen.getByAltText("is_favorite");

        expect(buttonElement).toBeInTheDocument();
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("src", "/images/star-filled.png");
    });

    it("should call onToggleFavorite when clicked", () => {
        const mockToggleFavorite = jest.fn();
        render(
            <FollowingButtonComponent
                isFav={false}
                onToggleFavorite={mockToggleFavorite}
            />
        );

        const buttonElement = screen.getByRole("button");

        fireEvent.click(buttonElement);

        expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
        expect(mockToggleFavorite).toHaveBeenCalledWith(true);
    });
});
