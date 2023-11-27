import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

interface Bookmark {
  id: number;
  name: string;
  link: string;
  showLink: boolean;
}

const Tab3 = () => {
  const initialBookmarks: Bookmark[] = [
    { id: 1, name: 'Bookmark 1', link: 'https://example.com/bookmark1', showLink: false },
    { id: 2, name: 'Bookmark 2', link: 'https://example.com/bookmark2', showLink: false },
    // Add more bookmarks as needed
  ];

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(initialBookmarks);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleToggleLink = (id: number) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === id ? { ...bookmark, showLink: !bookmark.showLink } : bookmark
      )
    );
  };

  const handleDeleteBookmark = (id: number) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmark) => bookmark.id !== id));
  };

  const filteredBookmarks = bookmarks.filter((bookmark) =>
    bookmark.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <Form.Group controlId="searchBox" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Search bookmarks"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Form.Group>

      {filteredBookmarks.map((bookmark) => (
        <Card key={bookmark.id} className="mb-3">
          <Card.Body>
            <Card.Title>{bookmark.name}</Card.Title>
            <Button variant="primary" onClick={() => handleToggleLink(bookmark.id)}>
              <FontAwesomeIcon icon={bookmark.showLink ? faCaretUp : faCaretDown} />
            </Button>{' '}
            <Button variant="danger" onClick={() => handleDeleteBookmark(bookmark.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
            {bookmark.showLink && (
              <Card.Text>
                <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
                  {bookmark.link}
                </a>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Tab3;