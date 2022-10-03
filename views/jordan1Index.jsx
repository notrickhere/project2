const React = require('react')
const DefaultLayout = require('./layouts/Default')
class jordan1Index extends React.Component {
    render() {
        const { jordan1 } = this.props
        return (
            <DefaultLayout>
                <div className="wholeContainer">
                    <div className="navBar">
                        <button>
                            <a href={`/jordan1/new`}>New Jordan 1</a>
                        </button>
                        <button>
                            <a href={`/`}>Home Page</a>
                        </button>
                    </div>

                    <div className="list">
                        <ul>
                            {jordan1.map((jordan, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            {/* each jordan */}
                                            <a href={`/jordan1/${jordan.id}`}>
                                            Colorway:{` `}{jordan.colorWay}
                                            <br />
                                            Price:{` `}{jordan.price}</a>
                                            <br />
                                            {/* Edit */}
                                            <>
                                                <a href={`/jordan1/${jordan._id}/edit`}>Edit Shoe</a>
                                            </>
                                            {/* Delete */}
                                            <form
                                                action={`/jordan1/${jordan._id}?_method=DELETE`}
                                                method="POST"
                                            >
                                                <input type="submit" value="DELETE" />
                                            </form>
                                        </li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </DefaultLayout>
        )
    }
}

module.exports = jordan1Index