type AboutProps = {
  onSelect: (section: string) => void;
};

export default function About({ onSelect }: AboutProps) {
  return (
    <nav className="w-full bg-white py-4">
      <ol className="flex justify-center flex-wrap gap-6 text-[#3b97de] font-semibold text-sm md:text-base">
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("start")}
        >
          Início
        </li>
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("past")}
        >
          Passado, Presente e Futuro da DA
        </li>
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("diagnostico")}
        >
          Diagnóstico precoce de DA
        </li>
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("biomarcadores")}
        >
          Biomarcadores no diagnóstico
        </li>
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("genero")}
        >
          Diferenças sexuais e de gênero
        </li>
        <li
          className="cursor-pointer hover:underline underline-offset-4 transition"
          onClick={() => onSelect("neuroinflamacao")}
        >
          Neuroinflamação e a DA
        </li>
      </ol>
    </nav>
  );
}
