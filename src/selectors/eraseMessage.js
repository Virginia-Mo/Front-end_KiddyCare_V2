import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { eraseMessageApi } from "../actions/message"

export default function useEraseMessage(){
    const dispatch = useDispatch()
    const messageApi = useSelector((state) => state.message.messageApi)

    useEffect(() => {
      setTimeout(()=> {
        dispatch(eraseMessageApi())
      },3000)
  }, [dispatch, messageApi])
}
