import { toast } from 'react-toastify'
import { firestore } from '../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { EMPLOYEE_COLLECTION, EMPLOYEE_ID_SESSION_KEY } from '../constants'

export const requestEmployeVerify = async (data) => {
  try {
    let fetchEmployeeData = {}
    const employeeRef = collection(firestore, EMPLOYEE_COLLECTION)
    const userQuery = query(employeeRef, where('employeeId', '==', data.employeeId))
    const result = await getDocs(userQuery)

    result.forEach((doc) => {
      fetchEmployeeData = doc.data()
    })

    if (fetchEmployeeData?.password !== data.password) {
      toast.error('Invalid credentials.')
      return [null, true]
    } else {
      toast.success('Login successfull.')
      sessionStorage.setItem(EMPLOYEE_ID_SESSION_KEY, data.employeeId)
      return [data.employeeId, false]
    }
  } catch (e) {
    return [null, e]
  }
}