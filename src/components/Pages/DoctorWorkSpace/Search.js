import React from "react"
import { Input } from "antd"

const { Search } = Input

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <Search
          placeholder="Search Here"
          enterButton="Search"
          loading={false}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </form>
    </React.Fragment>
  )
}

export default SearchForm
