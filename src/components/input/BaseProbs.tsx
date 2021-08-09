import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getBinom, getGeo, getHyper, getPoisson } from '~/api/Result';
import { Results } from '~/models/Results';

interface Props {
  type: 'binom' | 'geo' | 'hyper' | 'poisson';
  params: { name: string; title: string; max?: number }[];
}

const BaseProbs: React.FC<Props> = ({ type, params }) => {
  const signs = ['=', '<', '\u2264', '\u2265', '>'];

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState<Results>({
    eq: 0,
    lt: 0,
    leq: 0,
    geq: 0,
    gt: 0,
  });

  const onSubmit = async (data: never) => {
    let res: Results = { eq: 0, lt: 0, leq: 0, geq: 0, gt: 0 };
    try {
      switch (type) {
        case 'binom':
          res = await getBinom(
            data['x' as keyof never],
            data['n' as keyof never],
            data['p' as keyof never]
          );
          break;
        case 'geo':
          res = await getGeo(
            data['x' as keyof never],
            data['p' as keyof never]
          );
          break;
        case 'hyper':
          res = await getHyper(
            data['x' as keyof never],
            data['n' as keyof never],
            data['N' as keyof never],
            data['k' as keyof never]
          );
          break;
        case 'poisson':
          res = await getPoisson(
            data['x' as keyof never],
            data['p' as keyof never]
          );
          break;
        default:
          break;
      }
      setResult(res);
    } catch (error) {
      alert('Invalid Arguments');
    }
  };

  return (
    <div className="container rounded-md bg-blue-100 flex flex-col md:flex-row p-4">
      <div className="flex flex-col w-full md:w-1/2 my-2 md:mr-2">
        <p className="text-xl font-bold text-blue-500 mb-2">Input</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {params.map((param) => {
            return (
              <div key={`${type}-${param.name}`} className="flex flex-col mb-2">
                <label
                  className="number-input-label"
                  htmlFor={`${type}-${param.name}`}
                >
                  {param.title}
                </label>
                <input
                  className="number-input"
                  type="number"
                  id={`${type}-${param.name}`}
                  step={param.max ? 0.01 : 1}
                  {...register(param.name, {
                    required: true,
                    min: 0,
                    max: param.max,
                  })}
                />
              </div>
            );
          })}
          <hr className="my-2 mx-1 h-0.5 bg-blue-700" />
          <button
            className="button container rounded-lg bg-blue-600 text-gray-100"
            type="submit"
          >
            OK
          </button>
        </form>
      </div>
      <div className="flex flex-col w-full md:w-1/2 my-2 md:ml-2">
        <p className="text-xl font-bold text-blue-500 mb-2">Result</p>
        {Object.entries(result).map(([, value], index) => {
          return (
            <div key={`res-${index}`} className="flex flex-col mb-2">
              <p className="number-input-label">{`P(X ${signs[index]} x)`}</p>
              <input
                className="number-input"
                type="number"
                readOnly
                value={value}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BaseProbs;
