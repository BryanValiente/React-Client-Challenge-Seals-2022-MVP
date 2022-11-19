import { useEffect, useState } from "react";
import React from "react";
import bug from "../../assets/images/Bug.png";
import dark from "../../assets/images/Dark.png";
import dragon from "../../assets/images/Dragon.png";
import electric from "../../assets/images/Electric.png";
import fairy from "../../assets/images/Fairy.png";
import fighting from "../../assets/images/Fighting.png";
import fire from "../../assets/images/Fire.png";
import ghost from "../../assets/images/Ghost.png";
import ground from "../../assets/images/Ground.png";
import ice from "../../assets/images/Ice.png";
import normal from "../../assets/images/Normal.png";
import poison from "../../assets/images/Poison.png";
import psychic from "../../assets/images/Psychic.png";
import steel from "../../assets/images/Steel.png";
import water from "../../assets/images/Water.png";
import grass from "../../assets/images/Grass.png";
import rock from "../../assets/images/Rock.png";
export default function PokemonInfo(props) {
  const [types, setTypes] = useState([]);

  function getPokemonType() {
    const info = [];
    const url = `https://pokeapi.co/api/v2/pokemon/${props.number}`;

    info.push(fetch(url).then((res) => res.json()));
    Promise.all(info).then((res) => {
      const information = res.map((results) => ({
        type: results.types.map((type) => type.type.name).join(", "),
      }));

      console.log(information);
      setTypes(information[0].type.split(","));
      // displayInfo(information);
    });
  }

  useEffect(() => {
    getPokemonType();
  }, []);
  return (
    <>
      {types.map((t) => (
        <div id="info">
          {t == "grass" ? (
            <img src={grass} style={{ width: 50, height: 50 }} />
          ) : (
            <div>
              {t == "poison" ? (
                <img src={poison} style={{ width: 50, height: 50 }} />
              ) : (
                <div>
                  {t == "fire" ? (
                    <img src={fire} style={{ width: 50, height: 50 }} />
                  ) : (
                    <div>
                      {t == "water" ? (
                        <img src={water} style={{ width: 50, height: 50 }} />
                      ) : (
                        <div>
                          {t == "bug" ? (
                            <img src={bug} style={{ width: 50, height: 50 }} />
                          ) : (
                            <div>
                              {t == "normal" ? (
                                <img
                                  src={normal}
                                  style={{ width: 50, height: 50 }}
                                />
                              ) : (
                                <div>
                                  {t == "electric" ? (
                                    <img
                                      src={electric}
                                      style={{ width: 50, height: 50 }}
                                    />
                                  ) : (
                                    <div>
                                      {t == "ground" ? (
                                        <img
                                          src={ground}
                                          style={{ width: 50, height: 50 }}
                                        />
                                      ) : (
                                        <div>
                                          {t == "rock" ? (
                                            <img
                                              src={rock}
                                              style={{ width: 50, height: 50 }}
                                            />
                                          ) : (
                                            <div>
                                              {t == "fairy" ? (
                                                <img
                                                  src={fairy}
                                                  style={{
                                                    width: 50,
                                                    height: 50,
                                                  }}
                                                />
                                              ) : (
                                                <div>
                                                  {t == "fighting" ? (
                                                    <img
                                                      src={fighting}
                                                      style={{
                                                        width: 50,
                                                        height: 50,
                                                      }}
                                                    />
                                                  ) : (
                                                    <div>
                                                      {t == "psychic" ? (
                                                        <img
                                                          src={psychic}
                                                          style={{
                                                            width: 50,
                                                            height: 50,
                                                          }}
                                                        />
                                                      ) : (
                                                        <div>
                                                          {t == "dark" ? (
                                                            <img
                                                              src={dark}
                                                              style={{
                                                                width: 50,
                                                                height: 50,
                                                              }}
                                                            />
                                                          ) : (
                                                            <div>
                                                              {t == "steel" ? (
                                                                <img
                                                                  src={steel}
                                                                  style={{
                                                                    width: 50,
                                                                    height: 50,
                                                                  }}
                                                                />
                                                              ) : (
                                                                <div>
                                                                  {t ==
                                                                  "ghost" ? (
                                                                    <img
                                                                      src={
                                                                        ghost
                                                                      }
                                                                      style={{
                                                                        width: 50,
                                                                        height: 50,
                                                                      }}
                                                                    />
                                                                  ) : (
                                                                    <div>
                                                                      {t ==
                                                                      "ice" ? (
                                                                        <img
                                                                          src={
                                                                            ice
                                                                          }
                                                                          style={{
                                                                            width: 50,
                                                                            height: 50,
                                                                          }}
                                                                        />
                                                                      ) : (
                                                                        <div>
                                                                          {t ==
                                                                          "dragon" ? (
                                                                            <img
                                                                              src={
                                                                                dragon
                                                                              }
                                                                              style={{
                                                                                width: 50,
                                                                                height: 50,
                                                                              }}
                                                                            />
                                                                          ) : (
                                                                            <div>
                                                                              {t ==
                                                                              "ground" ? (
                                                                                <img
                                                                                  src={
                                                                                    ground
                                                                                  }
                                                                                  style={{
                                                                                    width: 50,
                                                                                    height: 50,
                                                                                  }}
                                                                                />
                                                                              ) : (
                                                                                <>

                                                                                </>
                                                                              )}
                                                                            </div>
                                                                          )}
                                                                        </div>
                                                                      )}
                                                                    </div>
                                                                  )}
                                                                </div>
                                                              )}
                                                            </div>
                                                          )}
                                                        </div>
                                                      )}
                                                    </div>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
