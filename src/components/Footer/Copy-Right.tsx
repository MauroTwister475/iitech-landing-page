import { SocialMidia } from "./Social-Midia";

export function CopyRight() {
  return (
    <div className="w-full border-t border-slate-500 py-2 flex flex-col lg:flex-row md:flex-row justify-between items-center">
      <span className="text-slate-300">
        IItech &copy;2024 - Todos os direitos reservados.
      </span>
      <SocialMidia />
    </div>
  );
}
