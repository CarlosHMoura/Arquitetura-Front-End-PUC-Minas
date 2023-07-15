import {reactive, computed} from 'vue'
const activeRequests: any = reactive([])

export default function usePageRequests(){
  const isLoading = computed(()=> !!activeRequests.length)
  const makeRequest = async (url: any) =>{

    const index = activeRequests.length
    activeRequests[index] = url
    
    const response = await fetch(url)
      .catch(error => alert(error)) 

    //@ts-ignore
    const data = await response.json();
    
    activeRequests.splice(index, 1)
    return data
  }
  return {isLoading, makeRequest}
}