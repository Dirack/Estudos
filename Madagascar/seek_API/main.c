/*
sf_esize
Returns the size of the element type of the file, e.g. SF INT, SF FLOAT, SF COMPLEX etc

sf_tell
Returns the current value of the position indicator of the file.

sf_bytes
Returns the size of the file in bytes.

sf_seek (file, offset, whence)
Definition:
	void sf_seek (sf_file file, off_t offset, int whence)
	Seek to a position in file. Follows fseek convention
*/

#include <rsf.h>

int get_element_position(sf_file fi,int i){
	sf_seek(fi,i*sizeof(float),SEEK_SET);
	return sf_tell(fi)/sf_esize(fi);
}

int main(int argc, char* argv[]){

	sf_file in;
	float* t;
	int i, j;

	sf_init(argc,argv);

	in = sf_input("in");

	sf_seek(in,0,SEEK_END);

	sf_warning("File length: %ld",sf_bytes(in));
	sf_warning("Number of elements: %ld",sf_tell(in)/sf_esize(in));

	sf_warning("Element 5 position: %d",get_element_position(in,5));

	t = sf_floatalloc(5);

	for(i=0;i<2;i++){
		sf_seek(in,i*5*sizeof(float),SEEK_SET);
		sf_warning("File Position: %ld",sf_tell(in)/sf_esize(in));

		sf_floatread(t,5,in);

		for(j=0;j<5;j++)
			sf_warning("Leitura %d: %f",i,t[j]);
	}
}
