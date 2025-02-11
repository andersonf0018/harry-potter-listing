import { render, screen } from "@testing-library/react";
import FavoriteIcon from ".";

describe('FavoriteIcon', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with default props', () => {
    render(<FavoriteIcon onClick={mockOnClick} isFavorite={false} />);
    
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('applies correct classes based on isFavorite prop', () => {
    const { rerender } = render(<FavoriteIcon onClick={mockOnClick} isFavorite={false} />);
    expect(screen.getByTestId('heart-icon')).toHaveClass('text-gray-400');

    rerender(<FavoriteIcon onClick={mockOnClick} isFavorite={true} />);
    expect(screen.getByTestId('heart-icon')).toHaveClass('text-red-500', 'fill-red-500');
  });

  it('applies custom width and height', () => {
    render(<FavoriteIcon onClick={mockOnClick} isFavorite={false} width={32} height={32} />);
    
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  it('handles click events and stops propagation', () => {
    render(<FavoriteIcon onClick={mockOnClick} isFavorite={false} />);
    
    const event = new MouseEvent("click", { bubbles: true });
    jest.spyOn(event, "stopPropagation");
  
    const button = screen.getByRole('button');
    button.dispatchEvent(event);
  
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
