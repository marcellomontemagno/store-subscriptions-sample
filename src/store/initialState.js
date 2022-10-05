const initialState = {
  entities: {
    me: {
      id: 'userUUID1'
    },
    users: {
      userUUID1: {
        id: "userUUID1",
        firstName: "Marcello",
        lastName: "Montemagno",
        email: "marcello.montemagno@anEmail.com"
      }
    },
    sections: {
      sectionUUID1: {
        id: "sectionUUID1",
        type: 'paper',
        position: 1,
        content: 'Section 1',
        createdBy: 'userUUID1'
      },
      sectionUUID2: {
        id: "sectionUUID2",
        type: 'paper',
        position: 2,
        content: 'Section 2',
        createdBy: 'userUUID1'
      },
      sectionUUID3: {
        id: "sectionUUID3",
        type: 'paper',
        position: 3,
        content: 'Section 3',
        createdBy: 'userUUID1'
      },
      sectionUUID4: {
        id: "sectionUUID4",
        type: 'summary',
        content: 'Summary 1',
        paperSectionId: 'sectionUUID1',
        createdBy: 'userUUID1'
      },
      sectionUUID5: {
        id: "sectionUUID5",
        type: 'summary',
        content: 'Summary 2',
        paperSectionId: 'sectionUUID2',
        createdBy: 'userUUID1'
      },
      sectionUUID6: {
        id: "sectionUUID6",
        type: 'summary',
        content: 'Summary 3',
        paperSectionId: 'sectionUUID3',
        createdBy: 'userUUID1'
      }
    },
  }
}

/*

just another example

//1Author:NBookmarks
//NBookmarks:NTags

authors:{
	a1:{
		firstName
	}
}

bookmarks:{
	bookmarkId:{
		title
		url
		authorId
	}
}

bookmarksTags:{
	bookmarkId+tagId:{
		bookmarkId1:b1
		tagId:t2
	}
	bookmarkId+tagId:{
		bookmarkId1:b1
		tagId:t2
	}
}

const getBookmarksByTag = (tagId)=>{
	const bookmarksTagsByTagId = Object.values(bookmarksTags).groupBy(R.prop(`tagId`))
	const thisBookmarksTags = bookmarksTagsByTagId[tagId]
	return thisBookmarksTags.map((bt)=>bookmarks[bt.bookmarkId])
}

const getTagsByBookmark = (bookmarkId)=>{
	const bookmarksTagsByBookmarkId = Object.values(bookmarksTags).groupBy(R.prop(`bookmarkId`))
	const thisBookmarksTags = bookmarksTagsByBookmarkId[bookmarkId]
	return thisBookmarksTags.map((bt)=>tags[bt.tagId])
}

const getBookmarksByAuthor = (authorId)=>{
	const bookmarksByAuthorId = Object.values(bookmarksTags).groupBy(R.prop(`authorId`))
	return bookmarksByAuthorId[authorId]
}

*/

export default initialState
