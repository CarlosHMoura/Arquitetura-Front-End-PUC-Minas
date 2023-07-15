import {ref} from 'vue'
import usePageRequests from './usePageRequests.js'

export default function useResource(resource: any){
  const { makeRequest } = usePageRequests()
  const items = ref([])
  const item = ref(null)
  const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
  const fetchAll = async ()=> items.value = await makeRequest(baseURL)
  const fetchOne = async (id: any) => item.value = await makeRequest(`${baseURL}/${id}`)

  return {
    items,
    fetchAll,
    item,
    fetchOne
  }
}