"use client";
import Image from "next/image";
import Link from "next/link";

export default  function PokemonDetail({ pokemon }) {
  return (
    <section className="p-4">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white/80 shadow-lg border border-slate-100 backdrop-blur-sm p-6 md:p-8">
        {/* En-tête */}
        <header className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="relative flex flex-col items-center">
            <div className="absolute inset-0 blur-3xl bg-emerald-200/40 rounded-full scale-110 -z-10" />
            <Image
              src={pokemon.sprites.regular}
              width={220}
              height={220}
              alt={pokemon.name.fr}
              className="object-contain drop-shadow-md"
            />
            {pokemon.sprites.shiny && (
              <p className="mt-2 text-xs text-amber-500 font-semibold uppercase tracking-wide">
                ✨ Version shiny disponible
              </p>
            )}
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-slate-400">
              #{pokemon.pokedex_id.toString().padStart(3, "0")}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold capitalize text-slate-900">
              {pokemon.name.fr}
            </h1>
            <p className="text-sm text-slate-500 mb-2">
              {pokemon.name.en} · {pokemon.name.jp}
            </p>
            <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 border border-emerald-100">
              {pokemon.category}
            </p>

            {/* Types */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
              {pokemon.types.map((type) => (
                <div
                  key={type.name}
                  className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 border border-slate-100"
                >
                  {type.image && (
                    <Image
                      src={type.image}
                      alt={type.name}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                  <span className="text-xs font-semibold text-slate-700">
                    {type.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Grille infos principales */}
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Informations
            </h2>
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-700 space-y-1">
              <p>
                <span className="font-semibold">Génération :</span>{" "}
                {pokemon.generation}
              </p>
              <p>
                <span className="font-semibold">Taille :</span> {pokemon.height}
              </p>
              <p>
                <span className="font-semibold">Poids :</span> {pokemon.weight}
              </p>
              <p>
                <span className="font-semibold">Groupes d&apos;œufs :</span>{" "}
                {pokemon.egg_groups.join(", ")}
              </p>
              <p>
                <span className="font-semibold">Taux de capture :</span>{" "}
                {pokemon.catch_rate}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Talents
            </h2>
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-700 space-y-2">
              {pokemon.talents.map((talent) => (
                <div
                  key={talent.name}
                  className="flex items-center justify-between gap-2"
                >
                  <span className="font-medium">{talent.name}</span>
                  {talent.tc && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 border border-amber-100">
                      Talent caché
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Sexe
            </h2>
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-sm text-slate-700 space-y-2">
              <div className="flex justify-between text-xs">
                <span>Mâle</span>
                <span>{pokemon.sexe.male}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500"
                  style={{ width: `${pokemon.sexe.male}%` }}
                />
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>Femelle</span>
                <span>{pokemon.sexe.female}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-400"
                  style={{ width: `${pokemon.sexe.female}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Statistiques de base
          </h2>
          <div className="space-y-2 rounded-xl bg-slate-50 border border-slate-100 p-4 text-xs sm:text-sm">
            {[
              ["PV", pokemon.stats.hp],
              ["Attaque", pokemon.stats.atk],
              ["Défense", pokemon.stats.def],
              ["Attaque Spé.", pokemon.stats.spe_atk],
              ["Défense Spé.", pokemon.stats.spe_def],
              ["Vitesse", pokemon.stats.vit],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-28 text-slate-600 font-medium">{label}</div>
                <div className="w-8 text-right font-mono text-slate-900">
                  {value}
                </div>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500"
                    style={{
                      width: `${Math.min(
                        100,
                        (typeof value === "number" ? value : 0) / 2
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Résistances */}
        <div className="mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
            Résistances
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs sm:text-sm">
            {pokemon.resistances.map((res) => (
              <div
                key={res.name}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <span className="font-medium text-slate-700">
                  {res.name}
                </span>
                <span
                  className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                    res.multiplier < 1
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : res.multiplier > 1
                      ? "bg-rose-50 text-rose-700 border border-rose-100"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  x{res.multiplier}
                </span>
              </div>
            ))}
          </div>
        </div>

         {/* Évolutions */}
         {(pokemon.evolution.pre || pokemon.evolution.next?.length) && (
          <div className="mt-6 pt-4 border-t border-slate-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
              Évolutions
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              {pokemon.evolution.pre && pokemon.evolution.pre.pokedex_id && (
                <Link
                  href={`/pokemon/${pokemon.evolution.pre.pokedex_id}`}
                  className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 hover:bg-slate-100 hover:border-slate-200 transition-colors"
                >
                  <span className="font-semibold text-slate-700">
                    Pré-évolution :
                  </span>{" "}
                  <span>{pokemon.evolution.pre.name}</span>
                </Link>
              )}
              {pokemon.evolution.next?.map((evo) => (
                <Link
                  key={evo.pokedex_id}
                  href={`/pokemon/${evo.pokedex_id}`}
                  className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 flex items-center gap-2 hover:bg-slate-100 hover:border-slate-200 transition-colors"
                >
                  <span className="font-semibold text-slate-700">
                    {evo.name}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    ({evo.condition})
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}