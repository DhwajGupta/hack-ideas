import { toast } from 'react-toastify'
import { firestore } from '../config/firebase'
import { getDocs, collection, query, orderBy, limit, Timestamp, increment } from 'firebase/firestore'
import { CHALLENGES_COLLECTION } from '../constants'

const perPage = process.env.REACT_APP_PER_PAGE

export const addNewChallenge = async (data) => {

  const processedData = {
    ...data,
    createdAt: Timestamp.fromDate(new Date()),
    upvotes: 0,
  }
  try {
    await firestore.collection(CHALLENGES_COLLECTION).doc().set(processedData)
    toast.success('New challenge created successfully.')
  } catch (e) {
    toast.error(e)
  }
}

export const toggleUpvoteChallenge = async (challengeId, isIncrement = true) => {
  try {
    await firestore.collection(CHALLENGES_COLLECTION).doc(challengeId).update({
      upvotes: isIncrement ? increment(1) : increment(-1)
    })
    toast.success('Challenge updated successfully.')
  } catch (e) {
    if (e) toast.error(e)
  }
}

export const getExistingChallenges = async (page = 1, orderByField = 'createdAt') => {
  try {
    const challengeData = []
    const challengeRef = collection(firestore, CHALLENGES_COLLECTION);
    const challengeQuery = query(challengeRef, orderBy(orderByField, 'desc'), limit(perPage));
    const data = await getDocs(challengeQuery)

    data.forEach(item => {
      challengeData.push({ ...item.data(), uid: item.id })
    })

    return [challengeData, false]
  } catch (e) {
    toast.error(JSON.stringify(e))
    return [null, e]
  }
}
