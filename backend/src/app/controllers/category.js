import {
    NOT_FOUND_DATA,
} from '../constants/errors/unsuccess'

const category = {
    ART: 'ศิลปะ',
    BUSINESS: 'ธุรกิจ',
    HISTORY: 'ประวัติศาสตร์',
    JOURNAL: 'ท่องเที่ยว',
    MATH: 'คณิตศาสตร์',
    REVIEW: 'รีวิว',
    SPORT: 'กีฬา'
}

const getCategoryByENUM = async (req, res) => {
  const { ENUM } = req.params
  const result = category[ENUM]

  if (!result) {
    throw NOT_FOUND_DATA
  }
  res.status(200).json({
    enum: ENUM,
    value: result
  })
}

const getCategoryList = async (req, res) => {
  res.status(200).json(category)
}


export default {
  getCategoryByENUM,
  getCategoryList
}