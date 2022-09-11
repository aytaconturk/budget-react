import React from 'react';
import Tesseract from 'tesseract.js';

const FotografdanYaziOkuma = () => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);

    const handleSubmit = () => {
        setIsLoading(true);
        Tesseract.recognize(image, 'tur', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                    setProgress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
                setIsLoading(false);
            });
    };

    return (
        <div className="row h-100">
            <div className="col-md-12 mx-auto h-100 d-flex flex-column justify-content-center">
                {!isLoading && (
                    <h1 className="text-center">Fotoğraftan Yazıya Dönüştür</h1>
                )}
                {isLoading && (
                    <>
                        <progress className="form-control" value={progress} max="100">
                            {progress}%{' '}
                        </progress>{' '}
                        <p className="text-center py-0 my-0">Dönüştürülüyor:- {progress} %</p>
                    </>
                )}
                {!isLoading && !text && (
                    <>
                        <input
                            type="file"
                            onChange={(e) =>
                                setImage(URL.createObjectURL(e.target.files[0]))
                            }
                            className="form-control mt-5 mb-2"
                        />
                        <input
                            type="button"
                            onClick={handleSubmit}
                            className="btn btn-primary mt-5"
                            value="Dönüştür"
                        />
                    </>
                )}
                {!isLoading && text && (
                    <>
                        <textarea
                            className="form-control w-100 mt-5"
                            rows="30"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </>
                )}
            </div>
        </div>
    )
}

export default FotografdanYaziOkuma