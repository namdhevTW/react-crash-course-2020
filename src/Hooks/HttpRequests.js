import { useEffect, useState } from "react"
import axios from "axios"

export default function useAxiosGet(url) {
    const [responseData, setResponseData] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setResponseData({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setResponseData({
                    loading: false,
                    data: response.data,
                    error: false
                })            
            })
            .catch(error => {
                setResponseData({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return responseData;
}