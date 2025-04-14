type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 mt-16">
      {children}
    </h2>
  );
};

export default SectionTitle; 