type AboutProps = {
    onSelect: (section: string) => void;
  };
  
  export default function About({ onSelect }: AboutProps) {
    return (
      <nav className="p-4">
        <ol className="flex flex-col gap-2 text-blue-800 font-semibold">
          <li className="cursor-pointer" onClick={() => onSelect("inicio")}>Início</li>
          <li className="cursor-pointer" onClick={() => onSelect("passado")}>Passado, Presente e Futuro da DA</li>
          <li className="cursor-pointer" onClick={() => onSelect("diagnostico")}>Diagnóstico precoce de DA</li>
          <li className="cursor-pointer" onClick={() => onSelect("biomarcadores")}>Biomarcadores no diagnóstico</li>
          <li className="cursor-pointer" onClick={() => onSelect("genero")}>Diferenças sexuais e de gênero</li>
          <li className="cursor-pointer" onClick={() => onSelect("neuroinflamacao")}>Neuroinflamação e a DA</li>
        </ol>
      </nav>
    );
  }
  