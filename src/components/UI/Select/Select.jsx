const Select = ({ optValue, defaultOption, onChange, ...props }) => {
  return (
    <>
      <select
        {...props}
        onChange={onChange}
        className="border border-blue-100 rounded-2xl text-center"
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optValue.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
