interface PokemonModal {
  pokemonDetails: Record<string, any>;
}

const PokemonCard: React.FC<PokemonModal> = ({
  pokemonDetails,
}: PokemonModal) => {
  return (
    <>
      {pokemonDetails && (
        <div className="card mt-5">
          <img
            src={pokemonDetails?.sprites?.front_shiny}
            height={400}
            width={"auto"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body bg-secondary">
            <h5 className="card-title capitalize text-warning h3">
              {pokemonDetails?.name}
            </h5>
            <div className="row text-white">
              <div className="col-6">Height</div>
              <div className="col-6">
                {Math.round(pokemonDetails.height * 3.9)}"
              </div>
            </div>
            <div className="row  text-white">
              <div className="col-6">Weight</div>
              <div className="col-6" data-testid="poke-weight">
                {Math.round(pokemonDetails.weight / 4.3)} lbs
              </div>
            </div>
            <div className="row  text-white">
              <div className="col-6"></div>
              <div className="col-6"></div>
            </div>
            <div className="row  text-white">
              <div className="col-6">Number of Battles</div>
              <div className="col-6">
                {pokemonDetails?.game_indices?.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
