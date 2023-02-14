import {
  useDispatch as useNativeDispatch,
  useSelector as useNativeSelector,
} from 'react-redux';
import { debounce } from 'lodash';
import type { TypedUseSelectorHook } from 'react-redux';
import type { IRootState, IAppDispatch } from './store';

const useDispatch = () => useNativeDispatch<IAppDispatch>();
const useSelector: TypedUseSelectorHook<IRootState> = useNativeSelector;

export {
  useDispatch,
  useSelector,
}
