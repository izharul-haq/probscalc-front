import { Results } from '~/models/Results';
import { BaseInstance } from './Base';

export const getBinom = async (
  x: number,
  n: number,
  p: number
): Promise<Results> => {
  const { data } = await BaseInstance.get<Results>(
    `/dist/binom?x=${x}&n=${n}&p=${p}`
  );
  return data;
};

export const getGeo = async (x: number, p: number): Promise<Results> => {
  const { data } = await BaseInstance.get<Results>(`/dist/geo?x=${x}&p=${p}`);
  return data;
};

export const getHyper = async (
  x: number,
  n: number,
  N: number,
  k: number
): Promise<Results> => {
  const { data } = await BaseInstance.get<Results>(
    `/dist/hyper?x=${x}&n=${n}&N=${N}&k=${k}`
  );
  return data;
};

export const getPoisson = async (x: number, p: number): Promise<Results> => {
  const { data } = await BaseInstance.get<Results>(
    `/dist/poisson?x=${x}&p=${p}`
  );
  return data;
};
