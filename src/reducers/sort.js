import {
  FETCH_USERS_SUCCESS,
  CHANGE_ACTIVE_USER,
  SEARCH_USER,
  SORT_USERS,
  RESET_FILTERS
} from '../actionTypes'

const initialState = {
  data: null,
  term: '',
  active: 0,
  error: false,
  sorted: {
    name: true,
    age: true
  }
}

export default (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        data: payload,
        defaultData: payload
      }
    case CHANGE_ACTIVE_USER:
      return {
        ...state,
        active: payload
      }
    case SEARCH_USER:
      const inputValue = payload.toLowerCase();
      const searchedData = state.defaultData.filter( (user) => {
        return user.name.toLowerCase().includes(inputValue)
      })
      return {
        ...state,
        term: inputValue,
        active: 0,
        data: searchedData
      }
    case SORT_USERS:
      // Определяем тип фильтра, по которому идёт сравнение и направление
      const isSorted = state.sorted[payload];
      let direction = isSorted ? 1 : -1;
      // Создаём новый массив из отфильтрованных юзеров
      const sortedData = [].slice.call(state.data).sort( (a, b) => {
        if ( a[payload] === b[payload] ) { return 0 }
        return a[payload] > b[payload] ? direction : direction*-1
      })
      return {
        ...state,
        data: sortedData,
        sorted: Object.assign({}, state.sorted, {[payload]: !state.sorted[payload]}),
        active: 0
      }
    case RESET_FILTERS:
      return {
        ...state,
        data: state.defaultData,
        term: '',
        active: 0,
        sorted: {
          'name': true,
          'age': true
        }

      }
    default:
      return state
  }
}