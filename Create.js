import React, { useState } from 'react'
import Nav from './Nav';
import axios from 'axios'
import Footer from './Footer';

const Create = () => {
    
    const styles = {
        width: "50%",
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, content, user)

        axios
            .post('http://localhost:4000/api/posts', state)
            .then((res) => {
                console.log(res.data);
                setState({
                    title: '',
                    content: '',
                    user: '',
                    slug: "",
                })
            })
            .catch((err) => {
                console.log (err.reponse.data.message);
            })
    }
    
    
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    });

    const { title, content, user, slug } = state;

    const handleChange = name => event => {
        console.log('name', name, 'event', event.target.value);
        setState({ ...state, [name]: event.target.value });

    };
    return (
    <>
        <div className="container p-xxl-5 p-sm-5" style={styles}>

          <Nav />
          
            <br />
        <h1 style={{ textAlign: "center"}}>Create new post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input
                        type="text"
                        className="form-control"
                       // placeholder="Post title"
                        required
                        onChange={handleChange('title')}
                        value={title}
                    />

                </div>
                <div className="form-group">
                    <label className="text-muted">Content</label>
                    <textarea
                        type="text"
                        className="form-control"
                       // placeholder="Write something.."
                        required
                        onChange={handleChange('content')}
                        value={content} />
                </div>
                <div className="form-group">
                    <label className="text-muted">Slug</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange('slug')}
                        value={slug} />
                </div>
                <div className="form-group">
                    <label className="text-muted">User</label>
                    <input
                        type="text"
                        className="form-control"
                       // placeholder="Your name"
                        required
                        onChange={handleChange('user')}
                        value={user} />
                </div>
               <button styles={{ marginTop:"20%" }} type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
        <Footer />
    </>    

    )
}

export default Create