import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { register, login, currentUser } from "../firebase/firebase";
import toast from "react-hot-toast";



const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const getMoviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

const getSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

//creating a context object
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [searching, setSearching] = useState("");
    const [movies, setMovies] = useState([]);
    const [detailMovie, setDetailMovie] = useState([]);
    const [videoKey, setVideoKey] = useState("");
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");



    const getMovies = async () => {
        try {
            const { data } = await axios.get(getMoviesUrl);
            setMovies(data.results);
            console.log(data);
        } catch (error) {
            toast.error(error);
        }
    }
    const searchingMovies = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                const { data } = await axios.get(getSearchMovie + searching);
                if (data.results.length === 0) {
                    toast.error('Nothing matches with this search!!!');
                } else {
                    setMovies(data.results)
                    toast.success("Searched")
                    setSearching('')
                }
            }
            catch (err) {
                toast.error(err);
            }
        }else{
            toast.error("Please login for before search 😛")
        }

    }

    const showDetails = async (id, title, navigate) => {
        if (user) {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);

                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
                console.log(res.data);
                setVideoKey(res.data.results[0].key);

                navigate(`/details/${title}`);
                setDetailMovie(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        } else {
            toast.error("Please login for details 🚽")
        }

    }

    const handleRegister = (e, navigate) => {
        e.preventDefault();
        register(email, password, name, lname, navigate);

    }

    const handleLogin = (e, navigate) => {
        e.preventDefault();
        login(email, password, navigate);
    }
    useEffect(() => {
        getMovies();
    }, []);

    useEffect(() => {
        currentUser(setUser);
    }, [])

    return (
        <AppContext.Provider value={{
            searching,
            setSearching,
            movies,
            getMovies,
            showDetails,
            videoKey,
            detailMovie,
            searchingMovies,
            name,
            lname,
            email,
            password,
            setName,
            setLname,
            setEmail,
            setPassword,
            handleRegister,
            handleLogin,
            user
        }}>{children}</AppContext.Provider>
    )
}

export default AppContextProvider;