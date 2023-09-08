export default function SubSectionTitle({
  titlePlain,
  titleColored,
}: {
  titlePlain: string;
  titleColored: string;
}) {
  return (
    <h4 className="text-[24px] md:text-[26px] font-light text-[#363636] max-w-[544px]">
      {titlePlain}&nbsp;
      <span className="font-semibold text-[#0F468E]">{titleColored}</span>
    </h4>
  );
}
