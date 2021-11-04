import { PayloadAction } from '@reduxjs/toolkit'
import {put, delay, takeEvery,takeLatest} from '@redux-saga/core/effects'
import { incrementSaga, incrementSagaSuccess } from './counterSlice'

function* handleIncrementSaga(action: PayloadAction<number>){
    yield delay(1000);
    yield put(incrementSagaSuccess(action.payload)) 
}

export default function* counterSaga(){
    yield takeEvery(incrementSaga.toString(),handleIncrementSaga)
    
}