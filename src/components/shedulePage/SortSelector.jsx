import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
const SortSelector = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const urlSort=searchParams.get('sortBy');
    const urlFilter=searchParams.get('league');
    const [league,setLeague]=useState(urlFilter||'All');
  
      
         const onChangeHanler=(e)=>{
            const value=e.target.value;
          console.log(e.target.value);
          setLeague(value);
         }

         useEffect(()=>{
            const params={};
            urlSort&&(params.sortBy=urlSort);
            league&&(params.league=league)
            setSearchParams(params);

         },[league,urlSort])


  return (
    <Select
      variant="outline"
      bg="red.700"
      focusBorderColor='red.700'
      _hover={{ bg: "red.800" }}
      icon={<MdArrowDropDown size="20px" />}
      textAlign="center"
      color="white"
      width="250px"
      defaultValue={league}
      onChange={onChangeHanler}
    >
      <option value="All" style={{ color: "black" }}>
        ALL
      </option>
      <option value="International" style={{ color: "black" }}>
        INTERNATIONAL
      </option>
      <option value="Domestic" style={{ color: "black" }}>
        DOMESTIC
      </option>
    </Select>
  );
};

export default SortSelector;
