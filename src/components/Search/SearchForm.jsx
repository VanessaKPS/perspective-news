import React from 'react'
import {
    SortOptions,
    SearchLanguages,
    SearchCategories,
    SearchCountries,
} from './SelectSearch'

const SearchForm = (props) => {
    const { reqTerms, reqStatus, submission, inputChange, selectChange } = props

    const { keyword, limit } = reqTerms

    const submit = (e) => {
        submission(e)
    }

    const textChange = (e) => {
        inputChange(e)
    }

    const selectionChange = (name, option) => {
        selectChange(name, option)
    }

    return (
        <form className='search-form' onSubmit={submit}>
            <label htmlFor='keyword'>Keywords</label>
            <input
                className='keyword-input'
                type='text'
                id='keyword'
                name='keyword'
                value={keyword}
                onChange={textChange}
                placeholder='Separate multiple keywords with ","'
            ></input>
            <br />
            <label htmlFor='limit'>No. of Articles</label>
            <input
                className='limit-input'
                type='text'
                id='limit'
                name='limit'
                value={limit}
                onChange={textChange}
                placeholder='Maximum of 100 articles'
            ></input>
            <br />
            <label htmlFor='sort-select'>Sort by</label>
            <SortOptions
                name='sort'
                id='sort-select'
                status={reqStatus}
                chosen={selectionChange}
            ></SortOptions>

            <br />
            <label htmlFor='categories-select'>Categories</label>
            <SearchCategories
                name='categories'
                id='categories-select'
                status={reqStatus}
                chosen={selectionChange}
            ></SearchCategories>
            <br />
            <label htmlFor='countries-select'>Countries</label>
            <SearchCountries
                name='countries'
                id='countries-select'
                status={reqStatus}
                chosen={selectionChange}
            ></SearchCountries>
            <br />
            <label htmlFor='languages-select'>Languages</label>
            <SearchLanguages
                name='languages'
                id='languages-select'
                status={reqStatus}
                chosen={selectionChange}
            ></SearchLanguages>
            <br />
            <input className='btn' type='submit' value='Submit'></input>
        </form>
    )
}

export default SearchForm
