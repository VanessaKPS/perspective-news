import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import {
    sortOptions,
    categoriesOptions,
    countriesOptions,
    languagesOptions,
} from '../../Options'

const SortOptions = (props) => {
    const [sorOption, setSorOption] = useState([null])
    useEffect(() => {
        setSorOption(null)
    }, [props.status])

    const handleSelect = (item, actionMeta) => {
        setSorOption(item)
        let selectedValue = item.value

        props.chosen(actionMeta.name, selectedValue)
    }

    return (
        <Select
            name='sort'
            options={sortOptions}
            className='basic-select'
            classNamePrefix='select'
            onChange={handleSelect}
            value={sorOption}
        />
    )
}

const SearchCategories = (props) => {
    const [catArr, setCatArr] = useState([null])
    useEffect(() => {
        setCatArr(null)
    }, [props.status])

    const handleSelect = (item, actionMeta) => {
        setCatArr(item)
        let selectedValues = item
        if (selectedValues === null) {
            selectedValues = null
        } else {
            selectedValues = Array.from(item, (option) => option.value)
        }

        props.chosen(actionMeta.name, selectedValues)
    }
    return (
        <Select
            closeMenuOnSelect={false}
            isMulti
            name='categories'
            options={categoriesOptions}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleSelect}
            value={catArr}
        />
    )
}

const SearchCountries = (props) => {
    const [couArr, setCouArr] = useState([null])
    useEffect(() => {
        setCouArr(null)
    }, [props.status])

    const handleSelect = (item, actionMeta) => {
        setCouArr(item)
        let selectedValues = item
        if (selectedValues === null) {
            selectedValues = null
        } else {
            selectedValues = Array.from(item, (option) => option.value)
        }

        props.chosen(actionMeta.name, selectedValues)
    }

    return (
        <Select
            closeMenuOnSelect={false}
            isMulti
            name='countries'
            options={countriesOptions}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleSelect}
            value={couArr}
        />
    )
}

const SearchLanguages = (props) => {
    const [lanArr, setLanArr] = useState([null])
    useEffect(() => {
        setLanArr(null)
    }, [props.status])

    const handleSelect = (item, actionMeta) => {
        setLanArr(item)
        let selectedValues = item
        if (selectedValues === null) {
            selectedValues = null
        } else {
            selectedValues = Array.from(item, (option) => option.value)
        }

        props.chosen(actionMeta.name, selectedValues)
    }
    return (
        <Select
            closeMenuOnSelect={false}
            isMulti
            name='languages'
            options={languagesOptions}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleSelect}
            value={lanArr}
        />
    )
}

export { SortOptions, SearchCategories, SearchCountries, SearchLanguages }
