type IFormRow = {
  placeholder: string;
};
export default function FormRow(props: IFormRow) {
  const { placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className="border-[0.5px] px-2 py-2 rounded text-sm font-light focus:outline-0 focus:border-[#0F468E]"
    />
  );
}
