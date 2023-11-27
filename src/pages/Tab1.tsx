import React, { useState, ChangeEvent, FormEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Tab1() {
  const [bookmarkName, setBookmarkName] = useState<string>('');
  const [bookmarkLink, setBookmarkLink] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookmarkName || !bookmarkLink) {
      setError('Both fields are required');
      return;
    }
    console.log('Bookmark Name:', bookmarkName);
    console.log('Bookmark Link:', bookmarkLink);
    setBookmarkName('');
    setBookmarkLink('');
    setError('');
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookmarkName(e.target.value);
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookmarkLink(e.target.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicBookmarkName">
          <Form.Label>Bookmark Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bookmark name"
            value={bookmarkName}
            onChange={handleNameChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBookmarkLink">
          <Form.Label>Bookmark Link</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter bookmark link"
            value={bookmarkLink}
            onChange={handleLinkChange}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Tab1;