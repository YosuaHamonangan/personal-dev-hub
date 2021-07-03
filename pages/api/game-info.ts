import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string
  url: string
}

var dummyData: Data[] = [
  {
    id: 'dino',
    url: 'https://yovic-dino-game.netlify.app',
  },
]

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  var data = dummyData.find(({ id }) => id === req.query.id)
  if (data) res.status(200).json(data)
  else res.status(404).end('Not Found')
}
