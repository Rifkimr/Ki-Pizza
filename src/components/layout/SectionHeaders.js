export default function SectionHeaders({ subHeader, mainHeader }) {
  return (
    <>
      <h3 className="text-semibold uppercase text-gray-500 leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </>
  );
}
