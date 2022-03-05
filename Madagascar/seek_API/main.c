#include <rsf.h>

int main(int argc, char* argv[]){

	sf_file in;

	sf_init(argc,argv);

	in = sf_input("in");

	sf_seek(in,0,SEEK_END);

	sf_warning("File length: %ld",sf_bytes(in));
	sf_warning("Number of elements: %ld",sf_tell(in)/sf_esize(in));
}
