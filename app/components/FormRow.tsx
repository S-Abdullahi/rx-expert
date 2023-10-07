type IFormRow = {
  placeholder: string;
  name?: string;
  value?: string;
  className?: string | boolean;
  onChange?: any;
};
export default function FormRow(props: IFormRow) {
  const { placeholder, onChange, name, value, className } = props;
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-[0.5px] border-gray-100 px-2 py-2 rounded text-sm font-light focus:outline-0 ${className? className : ''}  focus:border-[#0F468E]`}
    />
  );
}
