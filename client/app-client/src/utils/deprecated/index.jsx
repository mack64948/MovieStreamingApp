
            {/* <div className="category-selector" 
                onMouseLeave={ (e) => {
                    e.preventDefault();
                    setTimeout(() => {
                        setIsShowingCategories(false)
                    },1000);
                }}

                onMouseOver={(e) => {
                    e.preventDefault();
                    setIsShowingCategories(true)
                }} >

                <a  href="" className="dropdown-link"><p>Categories</p></a>
                {isShowingCategories && <div className="category-dropdown">
                    <a href="" onClick={
                        (e) => {
                            e.preventDefault()
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles/")
                        }
                    }><p>All</p></a>
                    <a href="" onClick={
                        (e) => {
                            e.preventDefault();
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles?genre=drama")

                        }
                    }><p>Drama</p></a>
                    <a onClick={
                        (e) => {
                            e.preventDefault();
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles?genre=action")
                        }
                    } href=""><p>Action</p></a>
                    <a href="" onClick={
                        (e) => {
                            e.preventDefault();
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles?genre=adventure")

                        }
                    }><p>Adventure</p></a>
                    <a href="" onClick={

                        (e) => {
                            e.preventDefault();
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles?genre=biography")

                        }
                    }><p>Biography</p></a>

                    <a href="" onClick={

                        (e) => {
                            e.preventDefault();
                            configureAPIEndpoint("http://127.0.0.1:8000/api/v1/titles?genre=animation")

                        }
                    }><p>Animation</p></a>
                </div>}
            </div> */}

             {/* <div className="search-bar">
                
                <div className="search-bar-left">
                    <label id="search-bar-input">Search By:</label>
                    <select onChange={ (e) => {
                        setSearchCategory(e.target.value);
                    }}>
                        <option value="title">Title</option>
                        <option value="director">Director</option>
                        <option value="country">Country</option>
                        <option value="genre">Genre</option>
                        <option value="actor">Actor</option>
                        <option value="language">Language</option>
                    </select>
                </div>
                <div className="search-bar-right">
                    <input onChange={
                        (e) => {
                            setSearchTerm(e.target.value);
                        }
                    } type="text" id="search-bar-input" />
                    <button onClick={ (e) => {
                        configureAPIEndpoint(`http://localhost:8000/api/v1/titles?${searchCategory}_contains=${searchTerm}`)
                    }}>Search</button>
                </div>
            </div> */}