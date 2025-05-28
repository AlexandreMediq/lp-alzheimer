type AboutProps = {
  onSelect: (section: string) => void;
};

export default function About({ onSelect }: AboutProps) {
  return (
    <nav className="w-full bg-[#d8eaf8] py-4">
      <ol className="flex justify-center flex-wrap mx-auto gap-3 text-[#3b97de] font-bold text-sm md:text-base">
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("start")}
        >
          Início
        </li>
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("past")}
        >
          Passado, Presente e Futuro da DA
        </li>
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("diagnostico")}
        >
          Diagnóstico precoce de DA
        </li>
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("biomarcadores")}
        >
          Biomarcadores no diagnóstico
        </li>
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("genero")}
        >
          Diferenças sexuais e de gênero
        </li>
        <li
          className="cursor-pointer hover:text-[#fafafa] hover:bg-[#3b97de] transition bg-[#FAFAFA] py-2 px-4 rounded-full"
          onClick={() => onSelect("neuroinflamacao")}
        >
          Neuroinflamação e a DA
        </li>
      </ol>
    </nav>
  );
}
