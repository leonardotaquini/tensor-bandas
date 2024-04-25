
import {tensor, matMul } from '@tensorflow/tfjs'
import { bandas } from './bandas';
import { users } from './users';
import { generos } from './bandas';


export const tensorCalculator = async (calificacion: number[]) => {

    const userVotes = tensor(calificacion);

    const bandFeats = tensor([
        [1, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 1],
    ]);

    const userFeats = matMul( userVotes, bandFeats );
    userFeats.print();

}

