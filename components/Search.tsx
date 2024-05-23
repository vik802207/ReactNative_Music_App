/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper'


function Search() {
    const [search, setSearch] = useState('')
  return (
   <>
   <Searchbar value={search} placeholder='Search' onChangeText={(text) => setSearch(text)} />
   </>
  )
}

export default Search