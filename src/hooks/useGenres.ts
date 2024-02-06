import useData from "./useData";
import genres from "../data/genres";


export interface Genre{
    id:number;
    name:string;
    image_background: string;
}



// interface FetchGeneresResponse{
//     count:number;
//     results:Genre[];
// }

// const useGeneres=()=>{


    
//     const [genres, setGeneres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading]=useState(false);
//     useEffect(() => {

//         const controller = new AbortController();
//     setLoading(true);
//       apiClient
//         .get<FetchGeneresResponse>("/genres",{signal: controller.signal})
//         .then((res) => {
//             setGeneres(res.data.results); 
//             setLoading(false);
//         })
//         .catch((err) => {
//             if (err instanceof CanceledError) return;
//             setError(err.message)});
//             setLoading(false);
//     return ()=>controller.abort();
//     },[]);
    
  
// return {genres,error, isLoading};


// };



// This was the call to server. Now providing static data.
//const useGenres=()=>useData<Genre>('/genres');


const useGenres=()=>({data:genres, isLoading:false,error:null})

export default useGenres;