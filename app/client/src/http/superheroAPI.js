import { $authHost, $host } from '.';

export const createUnivers = async univers => {
  const { data } = await $authHost.post('api/univers', univers);
  return data;
};

export const fetchUniverses = async () => {
  const { data } = await $host.get('api/univers');
  return data;
};

export const createPlanet = async planet => {
  const { data } = await $authHost.post('api/planet', planet);
  return data;
};

export const fetchPlanets = async () => {
  const { data } = await $host.get('api/planet');
  return data;
};

export const createSupehero = async superhero => {
  const { data } = await $authHost.post('api/superhero', superhero);
  return data;
};

export const fetchSupeheros = async (typeId, UniverId, page, limit = 5) => {
  const { data } = await $host.get('api/superhero', {
    params: {
      typeId,
      UniverId,
      page,
      limit,
    },
  });
  return data;
};
export const fetchOneSupehero = async id => {
  const { data } = await $host.get('api/superhero/' + id);
  return data;
};
