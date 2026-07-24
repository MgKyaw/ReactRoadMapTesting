describe('Search', () => {
  it('calls the onChange callback handler', () => {
    // Jest
    // const onChange = jest.fn();
    // Vitest
    const onChange = vi.fn();

    render(
      <Search value="" onChange={onChange}>
        Search:
      </Search>
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});