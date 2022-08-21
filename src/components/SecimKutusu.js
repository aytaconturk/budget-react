import React from 'react'
import Select from 'react-select';

const SecimKutusu = (props) => {
  return (
    <>
        <Select
            {...props}
            noOptionsMessage={() => 'Herhangi bir veri bulunamadı!'}
            placeholder={"Seçiniz"}
        />
    </>
  )
}

export default SecimKutusu