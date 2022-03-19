interface ICommits {
  node_id: string
  commit: {
    author: {
      name: string
      email: string
      date: string
    }
    commiter: {
      name: string
      email: string
      date:string
    }
    message: string
  }
}

export interface IProps {
  data: ICommits[]
}
